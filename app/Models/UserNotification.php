<?php

namespace App\Models;

use Illuminate\Notifications\DatabaseNotification;

class UserNotification extends DatabaseNotification
{
    protected $table = 'sp_notifications';

    public $incrementing = true;

    protected $keyType = 'int';
}
