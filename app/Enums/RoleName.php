<?php

namespace App\Enums;

enum RoleName: string
{
    case CONTRACTOR = 'contractor';
    case EXECUTOR = 'executor';
    case DISPATCHER = 'dispatcher';
    case ADMINISTRATOR = 'administrator';
    case OWNER = 'owner';
    case USER = 'user';
}
