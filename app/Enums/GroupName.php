<?php

namespace App\Enums;

enum GroupName: string
{
    case WORKER = 'worker';
    case CLIENT = 'client';
    case UNDEFINED = 'undefined';
}
