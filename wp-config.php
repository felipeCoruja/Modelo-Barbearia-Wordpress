<?php
/**
 * As configurações básicas do WordPress
 *
 * O script de criação wp-config.php usa esse arquivo durante a instalação.
 * Você não precisa usar o site, você pode copiar este arquivo
 * para "wp-config.php" e preencher os valores.
 *
 * Este arquivo contém as seguintes configurações:
 *
 * * Configurações do MySQL
 * * Chaves secretas
 * * Prefixo do banco de dados
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Configurações do MySQL - Você pode pegar estas informações com o serviço de hospedagem ** //
/** O nome do banco de dados do WordPress */
define( 'DB_NAME', 'barbearia01' );

/** Usuário do banco de dados MySQL */
define( 'DB_USER', 'root' );

/** Senha do banco de dados MySQL */
define( 'DB_PASSWORD', '' );

/** Nome do host do MySQL */
define( 'DB_HOST', 'localhost' );

/** Charset do banco de dados a ser usado na criação das tabelas. */
define( 'DB_CHARSET', 'utf8mb4' );

/** O tipo de Collate do banco de dados. Não altere isso se tiver dúvidas. */
define( 'DB_COLLATE', '' );

/**#@+
 * Chaves únicas de autenticação e salts.
 *
 * Altere cada chave para um frase única!
 * Você pode gerá-las
 * usando o {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org
 * secret-key service}
 * Você pode alterá-las a qualquer momento para invalidar quaisquer
 * cookies existentes. Isto irá forçar todos os
 * usuários a fazerem login novamente.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'mB`Wwxu,FYc>&o%s04y?LfQmXsfURR~$gLjv}%Vw*`E}8::ja@@>w2/b(EhL8`_7' );
define( 'SECURE_AUTH_KEY',  'qv~+r0-q5*Ox:QY;Vw{`^R)GF7wnVCb`MS{o%(yIFSsU4UqY!o5/..m.]0l&X.>G' );
define( 'LOGGED_IN_KEY',    '_o4=/6IhVZOc0q?~1!QISCS&+C5GI V0S^Rq-8zbfI^MA#bJnBX^4vXC-]+%rkMp' );
define( 'NONCE_KEY',        'a)}E+ye&_W-zYQemOOolH$*t<O:XXgrjz0,p<Xd1ix$j#|<Krjhut=U>{;f*/N~2' );
define( 'AUTH_SALT',        'a^kg#hOW;V&Z$=d@/wp2[4S,`0K&|E4e5}o|<+fl7LF{f6iy~X`n<SQ?p}TB~Znm' );
define( 'SECURE_AUTH_SALT', 'pb8BSLCb>hvK_N!d6FGH,w!sZpmp-#`9wcWX`Tr&TKC!yJ&NNI3cO8Y.)a6$loo=' );
define( 'LOGGED_IN_SALT',   'mqs-{+W^8=all}j[{)_`Rxz9Zng!cfs1tUob|U<pkd)w!/OBM@{qkXWH+yvuK?#x' );
define( 'NONCE_SALT',       'd _}w=?Ctcu;1Z5G:Gc:7Aar8qI^sg2HmI*D0a>`3mBS)SCfIo*iZF@.+H@%j1s)' );

/**#@-*/

/**
 * Prefixo da tabela do banco de dados do WordPress.
 *
 * Você pode ter várias instalações em um único banco de dados se você der
 * um prefixo único para cada um. Somente números, letras e sublinhados!
 */
$table_prefix = 'wp_';

/**
 * Para desenvolvedores: Modo de debug do WordPress.
 *
 * Altere isto para true para ativar a exibição de avisos
 * durante o desenvolvimento. É altamente recomendável que os
 * desenvolvedores de plugins e temas usem o WP_DEBUG
 * em seus ambientes de desenvolvimento.
 *
 * Para informações sobre outras constantes que podem ser utilizadas
 * para depuração, visite o Codex.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Isto é tudo, pode parar de editar! :) */

/** Caminho absoluto para o diretório WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Configura as variáveis e arquivos do WordPress. */
require_once ABSPATH . 'wp-settings.php';
