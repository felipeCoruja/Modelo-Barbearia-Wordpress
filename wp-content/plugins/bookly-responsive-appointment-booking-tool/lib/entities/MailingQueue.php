<?php
namespace Bookly\Lib\Entities;

use Bookly\Lib;

/**
 * Class MailingQueue
 *
 * @package Bookly\Lib\Entities
 */
class MailingQueue extends Lib\Base\Entity
{
    /** @var string */
    protected $phone;
    /** @var string */
    protected $text;
    /** @var int */
    protected $sent;
    /** @var string */
    protected $created_at;

    protected static $table = 'bookly_mailing_queue';

    protected static $schema = array(
        'id' => array( 'format' => '%d' ),
        'phone' => array( 'format' => '%s' ),
        'text' => array( 'format' => '%s' ),
        'sent' => array( 'format' => '%d' ),
        'created_at' => array( 'format' => '%s' ),
    );

    /**************************************************************************
     * Entity Fields Getters & Setters                                        *
     **************************************************************************/

    /**
     * Gets phone
     *
     * @return string
     */
    public function getPhone()
    {
        return $this->phone;
    }

    /**
     * Sets phone
     *
     * @param string $phone
     * @return $this
     */
    public function setPhone( $phone )
    {
        $this->phone = $phone;

        return $this;
    }

    /**
     * Gets text
     *
     * @return string
     */
    public function getText()
    {
        return $this->text;
    }

    /**
     * Sets text
     *
     * @param string $text
     * @return $this
     */
    public function setText( $text )
    {
        $this->text = $text;

        return $this;
    }

    /**
     * Gets sent
     *
     * @return int
     */
    public function getSent()
    {
        return $this->sent;
    }

    /**
     * Sets sent
     *
     * @param int $sent
     * @return $this
     */
    public function setSent( $sent )
    {
        $this->sent = $sent;

        return $this;
    }

    /**
     * Gets created_at
     *
     * @return string
     */
    public function getCreatedAt()
    {
        return $this->created_at;
    }

    /**
     * Sets created_at
     *
     * @param string $created_at
     * @return $this
     */
    public function setCreatedAt( $created_at )
    {
        $this->created_at = $created_at;

        return $this;
    }

    /**************************************************************************
     * Overridden Methods                                                     *
     **************************************************************************/

    /**
     * @inheritDoc
     */
    public function save()
    {
        if ( $this->getId() == null ) {
            $this->setCreatedAt( current_time( 'mysql' ) );
        }

        return parent::save();
    }

}