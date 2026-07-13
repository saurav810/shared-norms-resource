function ReflectionQuestions({ questions }) {
  return (
    <ol className="question-list">
      {questions.map((question, index) => (
        <li key={question}><span aria-hidden="true">{index + 1}</span><p>{question}</p></li>
      ))}
    </ol>
  )
}

export default ReflectionQuestions
