import { useState } from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

const App = () => {
    const[feedback, setFeedback] = useState({
        good: 0,
        neutral: 0,
        bad: 0
  })

    const countTotalFeedback = () => {
        const { good, neutral, bad } = feedback;
        return good + neutral + bad
    }

    const countPositiveFeedbackPercentage = () => {
        const { good } = feedback;
        return Math.round((good * 100) / countTotalFeedback())
    }

    const handleClick = (btnId) => {
        setFeedback((prevFeedback) => ({
            ...prevFeedback,
            [btnId]: prevFeedback[btnId] + 1
        }))
  }
  
    // const { good, neutral, bad } = this.state;
        return (
            <>
                <Section title="Please leave feedback">
                    <FeedbackOptions options={["good", "neutral", "bad"]} onLeaveFeedback={handleClick} />
                </Section>
                <Section title="Statistics">
                    {countTotalFeedback() > 0  ? (
                        <Statistics good={feedback.good} neutral={feedback.neutral} bad={feedback.bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} />
                        ) : (
                            <Notification message="There is no feedback"/>
                    )}
                </Section>
            </>
        )
}

export default App