<?php

namespace App\Http\Controllers;

use App\Services\ObjectiveService;

class ObjectiveController extends Controller
{
    protected $objectiveService;
    public function __construct(ObjectiveService $objectiveService)
    {
        $this->objectiveService = $objectiveService;
    }

    public function getAllObjectives()
    {
        $objectives = $this->objectiveService->getAll();

        return response()->json([
            'objectives' => $objectives
            ],201);
    }

    public function getObjectiveById(int $id)
    {
        $objective = $this->objectiveService->getObjectiveById($id);

        return response()->json([
            'objective' => $objective
        ], 201);
    }

    public function getObjectivesByStatus(string $status)
    {
        $objectives = $this->objectiveService->getObjectivesByStatus($status);

        return response()->json([
            'objectives' => $objectives
        ], 201);
    }

    public function getObjectivesByType(string $type)
    {
        $objectives = $this->objectiveService->getObjectivesByType($type);

        return response()->json([
            'objectives' => $objectives
        ], 201);
    }
}
