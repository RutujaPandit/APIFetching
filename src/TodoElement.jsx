const TodoElement = ({task}) => {
    return (
        <div className="todo">
            <p>{task}</p>
            <button onClick={() =>alert('Hello Rutuja')}>Toggle</button>
            <button onClick={() =>window.confirm('Are you sure you want to delete it')}>Delete</button>
        </div>
    )
}

export default TodoElement;

