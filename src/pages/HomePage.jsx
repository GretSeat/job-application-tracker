import Header from "../components/Header";
import TodoList from "../components/TodoList";
import HabitTracker from "../components/HabitTracker";
import Goals from "../components/Goals";
import Calendar from "../components/Calendar";
import ApplicationTracker from "../components/ApplicationTracker";
import Overview from "../components/Overview";

const HomePage = () => {
  return (
    <div className="homePage">
      <Header />
      <TodoList />
      <HabitTracker />
      <Goals />
      <Calendar />
      <ApplicationTracker />
      <Overview />
    </div>
  );
};

export default HomePage;
