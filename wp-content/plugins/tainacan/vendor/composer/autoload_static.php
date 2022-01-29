<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit4b7bf9a464a47301e1b1c4303f92ec74
{
    public static $files = array (
        '0e6d7bf4a5811bfa5cf40c5ccd6fae6a' => __DIR__ . '/..' . '/symfony/polyfill-mbstring/bootstrap.php',
    );

    public static $prefixLengthsPsr4 = array (
        'k' => 
        array (
            'kornrunner\\Blurhash\\' => 20,
        ),
        'S' => 
        array (
            'Symfony\\Polyfill\\Mbstring\\' => 26,
        ),
        'R' => 
        array (
            'Respect\\Validation\\' => 19,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'kornrunner\\Blurhash\\' => 
        array (
            0 => __DIR__ . '/..' . '/kornrunner/blurhash/src',
        ),
        'Symfony\\Polyfill\\Mbstring\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/polyfill-mbstring',
        ),
        'Respect\\Validation\\' => 
        array (
            0 => __DIR__ . '/..' . '/respect/validation/library',
        ),
    );

    public static $prefixesPsr0 = array (
        'S' => 
        array (
            'Smalot\\PdfParser\\' => 
            array (
                0 => __DIR__ . '/..' . '/smalot/pdfparser/src',
            ),
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit4b7bf9a464a47301e1b1c4303f92ec74::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit4b7bf9a464a47301e1b1c4303f92ec74::$prefixDirsPsr4;
            $loader->prefixesPsr0 = ComposerStaticInit4b7bf9a464a47301e1b1c4303f92ec74::$prefixesPsr0;
            $loader->classMap = ComposerStaticInit4b7bf9a464a47301e1b1c4303f92ec74::$classMap;

        }, null, ClassLoader::class);
    }
}