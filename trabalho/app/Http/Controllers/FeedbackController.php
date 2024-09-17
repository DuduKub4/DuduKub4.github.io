<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FeedbackController extends Controller
{
    public function index()
    {
        
        $feedbacks = session()->get('feedbacks', []);

        
        return view('feedback.index', compact('feedbacks'));
    }

    public function store(Request $request)
    {
        
        $request->validate([
            'message' => 'required|string|max:255',
        ]);

        
        $feedbacks = session()->get('feedbacks', []);

        
        $feedbacks[] = $request->input('message');

        
        session()->put('feedbacks', $feedbacks);

        
        return redirect()->route('feedback.index')->with('success', 'Feedback enviado com sucesso!');
    }
}

