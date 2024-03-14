<?php

namespace App\Http\Controllers;

use App\Services\EventService;
use Illuminate\Http\Client\Request;


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
            'type' => 'string',
            'source' => 'string',
            'contactName' => 'string',
            'communication' => 'string',
            'description' => 'string',
            'isContentExist' => 'bool'
        ]);
    }
}
