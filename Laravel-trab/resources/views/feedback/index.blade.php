@extends('feedback.layout')

@section('content')
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card p-4">
                <h2 class="text-center mb-4">Enviar Feedback</h2>

                <!-- Exibe mensagem de sucesso -->
                @if(session('success'))
                    <div class="alert alert-success">
                        {{ session('success') }}
                    </div>
                @endif

                <!-- Formulário de feedback -->
                <form action="{{ route('feedback.store') }}" method="POST">
                    @csrf
                    <div class="mb-4">
                        <label for="message" class="form-label">Sua mensagem de feedback</label>
                        <textarea name="message" id="message" rows="4" class="form-control" required></textarea>
                        @error('message')
                            <div class="text-danger">{{ $message }}</div>
                        @enderror
                    </div>
                    <div class="text-center">
                        <button type="submit" class="btn btn-primary btn-lg">Enviar</button>
                    </div>
                </form>
            </div>

            <hr class="my-5">

            <!-- Listagem de feedbacks -->
            <div class="card p-4">
                <h3 class="text-center mb-4">Feedbacks Enviados</h3>
                @if(count($feedbacks) > 0)
                    <ul class="list-group">
                        @foreach($feedbacks as $feedback)
                            <li class="list-group-item">{{ $feedback }}</li>
                        @endforeach
                    </ul>
                @else
                    <p class="text-center">Nenhum feedback enviado ainda.</p>
                @endif
            </div>
        </div>
    </div>
@endsection
