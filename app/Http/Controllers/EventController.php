<?php

namespace App\Http\Controllers;

use App\Services\EventService;
use App\Services\ObjectiveService;
use Illuminate\Http\Request;


class EventController extends Controller
{
    protected $eventService, $objectiveService;
    public function __construct(EventService $eventService, ObjectiveService $objectiveService)
    {
        $this->eventService = $eventService;
        $this->objectiveService = $objectiveService;
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
            'contactId'     => 'int'
        ]);

        $event = $this->eventService->createEvent($eventData);

        $objective = $this->objectiveService->createObjective($event['id']);

        return response()->json([
            'event' => $event,
            'objective' => $objective
        ]);
    }
}
