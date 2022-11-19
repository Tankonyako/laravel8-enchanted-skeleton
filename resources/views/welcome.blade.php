@extends('layout.example')

@push('content')
    <div class="text-center">
        <h1>Fudo's Laravel 8 Skeleton</h1>
        <hr>
        <p class="h2">Example of app</p>
        <p class="on-full-responsive">Resize window</p>
        <hr>
        <p>Laravel v{{ Illuminate\Foundation\Application::VERSION }} (PHP v{{ PHP_VERSION }})</p>
    </div>
@endpush
