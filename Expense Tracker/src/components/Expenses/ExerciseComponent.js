import { useState } from "react";

const ExerciseComponent = ({firstName, lastName}) => {

    return(
        <div>
            <p>First Exercise Done!!!!!</p>
            <p>Your First Name is : {firstName} and Last Name is : {lastName}</p>
        </div>
    )
}

export default ExerciseComponent;