import {useState} from 'react'
import {Form, Button, Checkbox} from 'semantic-ui-react'

function UserEditForm({checked, setChecked, setShowBirthday, showBirthday, user, setUser, setShowEditForm}){

    const [edits, setEdits] = useState({
        username: user.username,
        name: user.name,
        pfp: user.pfp,
        age: user.age, 
        bio: user.bio,
        showBirthday: user.showBirthday
    })

    function handleChecked(e){
        console.log(e.target.name, "value")
        console.log(e.target.value, "key")
        setChecked(!checked)
        setShowBirthday(checked)
        setEdits({...edits, [e.target.name]: e.target.value})
    }

    function handleEdit(event){
        let key = event.target.name;
        let value = event.target.value;
        setEdits({...edits, [key]: value})
    }

    function handleSubmit(event){
        event.preventDefault()
        fetch(`/users/${user.id}`, {
            method: "PATCH", 
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(edits)
        }).then(response => response.json())
        .then(data => {
            setUser(data)
            setEdits(data)
            setShowEditForm(false)
            console.log(data, "data")
        })
    }
    return(
        <div>
        <Form onSubmit={handleSubmit}>
            username: <Form.Input name = "username" type = "text" value = {edits.username} placeholder= "username" onChange = {handleEdit}/>
            name: <Form.Input name = "name" type = "text" value = {edits.name} placeholder= "name" onChange = {handleEdit}/>
            profile picture: <Form.Input name = "pfp" type = "text" value = {edits.pfp} placeholder= "profile picture link" onChange = {handleEdit}/>
            birthday: <Form.Input name = "age" type = "text" value = {edits.age} placeholder= "MM-DD-YYYY" onChange = {handleEdit}/>
            <div className = "checkbox">
            <Form.Input control = "input" type = "checkbox" checked = {checked} value = {checked} name = "showBirthday" label = "don't show my birthday" onChange = {handleChecked}/>
            </div>
            bio: <Form.TextArea name = "bio" type = "text" value = {edits.bio} placeholder = "bio" onChange = {handleEdit}/>
            <Button type = "submit">Save Changes</Button>
        </Form>
        </div>
    )
}

export default UserEditForm