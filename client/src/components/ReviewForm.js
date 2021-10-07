import {useState, useEffect} from  'react'
import {useHistory, useParams} from 'react-router-dom'
import {Button, Form} from 'semantic-ui-react'

function ReviewForm({reviews, setReviews, user}){
    const params = useParams()

    const [addReview, setAddReview] = useState({
        content: '',
        user_rating: 1
    })

    const [editing, setEditing] = useState(false)

    function handleEditReview(e){
        let key = e.target.name;
        let value = e.target.value;
        setAddReview({...addReview, [key]: value})
        setEditing(true)
    }

    function handleFormSubmit(event){
        event.preventDefault()
        fetch(`/reviews/${params.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(addReview)
        }).then(response => response.json())
        .then(data => {
            let updateId = reviews.findIndex(review => review.id == data.id)
            reviews[updateId] = data
            setReviews(reviews)
            setAddReview({
                content: '',
                user_rating: 0
            })
        })
    }
    return(
        <Form className = "login-form" onSubmit = {handleFormSubmit}>
            <input type = "text" name = "content" onChange = {handleEditReview} value = {addReview.content} placeholder = "enter review"/>
            <select name = "user_rating" onChange={handleEditReview} value={addReview.user_rating}>
					<option value = "1"> 1 </option>
                    <option value = "2"> 2 </option>
                    <option value = "3"> 3 </option>
                    <option value = "4"> 4 </option>
                    <option value = "5"> 5 </option>
			</select>
            <Button type = "submit">Submit</Button>
        </Form>
    )
}

export default ReviewForm