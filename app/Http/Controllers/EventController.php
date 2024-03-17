<?php

namespace App\Http\Controllers;

use App\Services\EventService;
use Illuminate\Http\Request;


class EventController extends Controller
{
    protected $eventService;
    public function __construct(EventService $eventService)
    {
        $this->eventService = $eventService;
    }

    public function getAllEvents()
    {
        $events = $this->eventService->getAllEvents();

        return response()->json([
           'events' => $events
        ], 201);
    }

    public function createEvent(Request $request)
    {
        $eventData = $request->validate([
            'contactName'   => 'string',
            'type'          => 'string',
            'source'        => 'string',
            'content'       => 'string',
        ]);

        $event = $this->eventService->createEvent($eventData);

        return response()->json([
           'event' => $event
        ]);
    }
}
