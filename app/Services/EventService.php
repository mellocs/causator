<?php

namespace App\Services;

use App\Models\Event;
use App\Repositories\EventRepository;

class EventService
{
    protected $eventRepository;
    public function __construct(EventRepository $eventRepository)
    {
        $this->eventRepository = $eventRepository;
    }

    public function getAllEvents()
    {
        return $this->eventRepository->getAllEvents();
    }

    public function createEvent(array $event) : Event
    {
        return Event::create($event);
    }
}
