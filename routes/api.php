<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\RoleController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);


Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('/logout', [AuthController::class, 'logout']);

    // contacts routes
    Route::get('/contacts', [ContactController::class, 'index']);
    Route::get('/contacts/current', [ContactController::class, 'getCurrentContact']);
    Route::get('/contacts/{id}', [ContactController::class, 'show']);
    Route::get('/contacts/delete/{id}', [ContactController::class, 'deleteContact']);
    Route::put('/contacts/{id}/update', [ContactController::class, 'edit']);
    Route::put('/contacts/{id}/status', [ContactController::class, 'changeStatus']);
    Route::get('/contacts/{id}/status/check', [ContactController::class, 'getContactStatus']);

    // roles routes
    Route::get('/roles', [RoleController::class, 'getAllRoles']);
    Route::get('/roles/{id}', [RoleController::class, 'getContactsByRole']);

    // events routes
    Route::get('/events', [EventController::class, 'getAllEvents']);
    Route::post('/events/create', [EventController::class, 'createEvent']);

    // objectives routes
    Route::get('/objectives', [EventController::class, 'getAllObjectives']);
    Route::get('/objectives/status/{id}', [EventController::class, 'getObjectiveByStatus']);
    Route::get('/objectives/type/{id}', [EventController::class, 'getObjectiveByType']);
    Route::get('/objectives/{id}', [EventController::class, 'getObjectiveById']);


    // owner routes
    Route::group(['middleware' => ['role:owner']], function () {
        Route::post('/contacts/create', [ContactController::class, 'create']);
        Route::get('/test', [ContactController::class, 'test']);
    });
});



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
