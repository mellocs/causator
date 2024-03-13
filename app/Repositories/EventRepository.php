<?php

namespace App\Repositories;

use App\Models\Event;

class EventRepository
{
    public function getAllEvents()
    {
        return Event::all();
    }
}
