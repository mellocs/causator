<?php

namespace App\Services;

use App\Models\Event;
use App\Repositories\ContactRepository;
use App\Repositories\EventRepository;

class EventService
{
    protected $eventRepository, $contactRepository;
    public function __construct(EventRepository $eventRepository, ContactRepository $contactRepository)
    {
        $this->eventRepository = $eventRepository;
        $this->contactRepository = $contactRepository;
    }

    public function getAllEvents()
    {
        return $this->eventRepository->getAllEvents();
    }

    public function createEvent($eventData) : Event
    {
        // also create process
        $contact = $this->contactRepository->getContactByAlias($eventData['contactName']);

        $event = Event::create([
            'contact_id'    => $contact['id'],
            'type'          => $eventData['type'],
            'source'        => $eventData['source'],
            'content'       => $eventData['content']
        ]);

        return $event;
    }
}
