import List from "./components/List";
import AuthForm from "./components/AuthForm";

const Home = () => {
  return (
    <div className="min-h-screen w-full">
      <h1>ToDoList</h1>
      <p>
        Organizza le tue attività in modo semplice. Registrati per iniziare.
      </p>
      <div>
        <AuthForm />
      </div>
    </div>
  );
};

export default Home;
