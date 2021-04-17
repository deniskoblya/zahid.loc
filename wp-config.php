<?php
// BEGIN iThemes Security - Не меняйте и не удаляйте эту строку
// iThemes Security Config Details: 2
define( 'DISALLOW_FILE_EDIT', true ); // Отключить редактор файлов - Безопасность > Настройки > Подстройки WordPress > Редактор файлов
// END iThemes Security - Не меняйте и не удаляйте эту строку
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */
// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress bs415027_zahid sLX_45ev6^*/
define('DB_NAME', 'bs415027_zahidnew');
/** MySQL database username */
define('DB_USER', 'root');
/** MySQL database password */
define('DB_PASSWORD', 'root');
/** MySQL hostname */
define('DB_HOST', 'localhost');
/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');
/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');
/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '0(nanJE^MiyvR42Mg1#McON5I7q!!yw)YAAPYTXC)#LoAl&t*oc04NR&hGEr3EIZ');
define('SECURE_AUTH_KEY',  'qNHr!gFS^WUEb1VRw*2nHWdjy(!OY29hJw(A^QQBFvgHF7IEdWI^Z6p51ShN^ZZA');
define('LOGGED_IN_KEY',    '^qdQHpF3o0TutI!ff(HAtP0LhOl@*M(kHWT@wVpO@B9z@CIwE%H%g10%TG7LoMWK');
define('NONCE_KEY',        'DgwvfU)@aX5ZMzcJPFA870Y)eT6t7NvA4KS(STu&#5g@p%jVXO%5uPKTI(nRLc*K');
define('AUTH_SALT',        'N^DKE7Gr2)Q4eC#)j!QBk#VVHjLORk#^dBgfMBV&Q(o!2QlzKAD9KpteW08uEguU');
define('SECURE_AUTH_SALT', 'kyCypNV!)BAzWbEbq3B(%^hK&V9fVH2Ue%L5#NZ^qv9U@#iC*XL^nnGou!q7MPq4');
define('LOGGED_IN_SALT',   'AzqUo!JjK5q1UtiRGaYM%4Supr1U34aMW53b(8!GOk3Qkxof)GqW@GTmiiBD6lm%');
define('NONCE_SALT',       'cnSSL4m(rlt!e@0yaGPrdSNuh4ICo@@yXH5k8xXMg4PT3J4PjczTJq4vK%2UDxvQ');
define( 'AUTOMATIC_UPDATER_DISABLED', true ); // полностью отключает автообновления
/**#@-*/
/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';
/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WPCF7_AUTOP', false );
/* That's all, stop editing! Happy blogging. */
/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');
/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
define( 'WP_ALLOW_MULTISITE', true );
define ('FS_METHOD', 'direct');
