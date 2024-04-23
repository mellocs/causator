<?php

namespace App\Services;

use App\Repositories\ObjectiveRepository;

class ObjectiveService
{
    protected $objectiveRepository;
    public function __construct(ObjectiveRepository $objectiveRepository)
    {
        $this->objectiveRepository = $objectiveRepository;
    }

    public function createObjective($eventId)
    {


        return 1;
    }

    public function getAll()
    {
        return $this->objectiveRepository->getAll();
    }

    public function getObjectiveById($id)
    {
        return $this->objectiveRepository->getObjectiveById($id);
    }

    public function getObjectivesByStatus($status)
    {
        return $this->objectiveRepository->getObjectivesByStatus($status);
    }

    public function getObjectivesByType($type)
    {
        return $this->objectiveRepository->getObjectivesByType($type);
    }
}
