import RequestForm from '../components/RequestForm';

export default function FormPage() {
  return (
    <section>
      <h1>Заявка на книгу</h1>

      <p className="description">
        Заповніть форму, щоб залишити заявку на потрібну книгу.
      </p>

      <RequestForm />
    </section>
  );
}