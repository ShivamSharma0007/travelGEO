# WordPress Integration Guide for TravelGeographic 

This React application is structured to be easily integrated with WordPress. Below are the guidelines and steps for WordPress integration.

## File Structure for WordPress

The application follows a modular component structure that can be easily mapped to WordPress:

### Components Mapping

```
/components/
├── Header.tsx          → WordPress Header Template
├── Footer.tsx          → WordPress Footer Template
├── Hero.tsx            → WordPress Home Page Hero Section
├── Destinations.tsx    → Custom Post Type: Destinations (Archive)
├── Services.tsx        → Custom Post Type: Services (Archive)
├── Testimonials.tsx    → WordPress Widget/Shortcode
├── ContactForm.tsx     → Contact Form 7 / Gravity Forms / Custom Form
├── WhatsAppButton.tsx  → WordPress Widget/Plugin
└── DestinationModal.tsx → Custom Modal Component
```

### Service Pages (Draft Templates)
Located in `/components/services/`:
- `LuxuryFleet.tsx` → Page Template: Luxury Fleet
- `CityTours.tsx` → Page Template: City Tours
- `HotelBookings.tsx` → Page Template: Hotel Bookings
- `Adventures.tsx` → Page Template: Adventure Activities

## WordPress Integration Steps

### 1. Convert to WordPress Theme

**Option A: Use as React Theme (Recommended)**
- Install **Frontity** or **WPGraphQL + Headless WordPress**
- Keep React components as-is
- Connect to WordPress backend via REST API or GraphQL

**Option B: Convert to Classic WordPress Theme**
- Convert components to PHP template files
- Use WordPress functions: `wp_head()`, `wp_footer()`, `get_header()`, `get_footer()`
- Enqueue scripts and styles in `functions.php`

### 2. Custom Post Types

Create custom post types in WordPress:

```php
// In functions.php

// Destinations Custom Post Type
function create_destinations_post_type() {
    register_post_type('destinations',
        array(
            'labels' => array(
                'name' => __('Destinations'),
                'singular_name' => __('Destination')
            ),
            'public' => true,
            'has_archive' => true,
            'supports' => array('title', 'editor', 'thumbnail', 'custom-fields'),
            'menu_icon' => 'dashicons-location-alt',
        )
    );
}
add_action('init', 'create_destinations_post_type');

// Services Custom Post Type
function create_services_post_type() {
    register_post_type('services',
        array(
            'labels' => array(
                'name' => __('Services'),
                'singular_name' => __('Service')
            ),
            'public' => true,
            'has_archive' => true,
            'supports' => array('title', 'editor', 'thumbnail', 'custom-fields'),
            'menu_icon' => 'dashicons-admin-tools',
        )
    );
}
add_action('init', 'create_services_post_type');
```

### 3. Custom Fields Setup

Use **Advanced Custom Fields (ACF)** plugin for:

**Destinations:**
- Price (Text)
- Duration (Text)
- Group Size (Text)
- Tag (Text)
- Highlights (Repeater)
- Included Items (Repeater)
- Gallery (Gallery Field)

**Services:**
- Features (Repeater)
- Price Range (Text)
- Icon (Image)
- Category (Taxonomy)

### 4. Form Integration

**ContactForm.tsx** can be replaced with:
- **Contact Form 7** - `[contact-form-7 id="123"]`
- **Gravity Forms** - `[gravityform id="1"]`
- **WPForms** - `[wpforms id="456"]`

Or use WordPress AJAX for custom form handling:

```javascript
// In ContactForm component
const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('action', 'submit_contact_form');
    formData.append('name', formData.name);
    formData.append('email', formData.email);
    // ... other fields

    const response = await fetch(wpAjax.ajaxurl, {
        method: 'POST',
        body: formData
    });
    
    const result = await response.json();
    // Handle response
};
```

### 5. WhatsApp Integration

Add WhatsApp number as WordPress option:

```php
// In functions.php
function register_whatsapp_settings() {
    register_setting('general', 'whatsapp_number', array(
        'type' => 'string',
        'sanitize_callback' => 'sanitize_text_field',
        'default' => '919876543210'
    ));
    
    add_settings_field(
        'whatsapp_number',
        'WhatsApp Number',
        'whatsapp_number_callback',
        'general'
    );
}

function whatsapp_number_callback() {
    $value = get_option('whatsapp_number', '919876543210');
    echo '<input type="text" id="whatsapp_number" name="whatsapp_number" value="' . esc_attr($value) . '" />';
}

add_action('admin_init', 'register_whatsapp_settings');
```

Access in component:
```javascript
const whatsappNumber = wpData.whatsappNumber; // Pass from PHP
```

### 6. Hero Background GIF

Store GIF in WordPress Media Library:

```php
// In header.php or custom template
<?php
$hero_gif = get_theme_mod('hero_background_gif', 'default-url.gif');
?>
<div style="background-image: url('<?php echo esc_url($hero_gif); ?>')">
```

### 7. Responsive Design

The application is already mobile-responsive using Tailwind CSS breakpoints:
- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px
- `xl:` - 1280px

These work seamlessly with WordPress.

### 8. WordPress REST API Integration

For headless WordPress setup:

```javascript
// Fetch destinations
const fetchDestinations = async () => {
    const response = await fetch('/wp-json/wp/v2/destinations');
    const data = await response.json();
    return data;
};

// Fetch services
const fetchServices = async () => {
    const response = await fetch('/wp-json/wp/v2/services');
    const data = await response.json();
    return data;
};
```

### 9. Enqueue Scripts (Classic Theme)

```php
// In functions.php
function travelgeographic_enqueue_scripts() {
    // Enqueue main CSS
    wp_enqueue_style('main-styles', get_template_directory_uri() . '/styles/globals.css');
    
    // Enqueue React bundle
    wp_enqueue_script('react-app', get_template_directory_uri() . '/build/bundle.js', array(), '1.0', true);
    
    // Pass PHP data to JavaScript
    wp_localize_script('react-app', 'wpData', array(
        'ajaxurl' => admin_url('admin-ajax.php'),
        'whatsappNumber' => get_option('whatsapp_number'),
        'apiUrl' => rest_url()
    ));
}
add_action('wp_enqueue_scripts', 'travelgeographic_enqueue_scripts');
```

### 10. Page Templates

Create WordPress page templates:

```php
<?php
/*
Template Name: Luxury Fleet
*/

get_header();
?>

<div id="luxury-fleet-root"></div>

<?php
// React component will mount here
?>

<?php get_footer(); ?>
```

## Recommended Plugins

1. **Advanced Custom Fields (ACF)** - Custom fields management
2. **WPGraphQL** - GraphQL API for headless setup
3. **Contact Form 7** - Form handling
4. **Yoast SEO** - SEO optimization
5. **WP Fastest Cache** - Performance optimization
6. **Wordfence** - Security
7. **UpdraftPlus** - Backups

## Editable Content Areas

All text content in the service pages is currently hardcoded in the components. To make them editable in WordPress:

1. Convert text to WordPress post content
2. Use ACF fields for structured data
3. Create a custom Gutenberg block
4. Use WordPress Customizer for theme options

## Next Steps

1. Choose integration method (Headless vs Classic)
2. Set up custom post types
3. Install and configure ACF
4. Migrate form to WordPress plugin
5. Configure WhatsApp settings
6. Upload hero GIF to Media Library
7. Test responsive design
8. Set up caching and optimization
9. Configure SEO settings
10. Launch!

## Support

For questions about WordPress integration, refer to:
- WordPress Codex: https://codex.wordpress.org/
- React WordPress integration: https://developer.wordpress.org/block-editor/
- Headless WordPress: https://wordpress.org/gutenberg/handbook/
