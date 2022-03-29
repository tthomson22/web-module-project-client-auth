import React from 'react'

const AddFriend = () => {
    return (
        <div>
            <h2>Add Friend</h2>
            <form>
                <div>
                    <label htmlFor='username'>username</label>
                    <input id='username'/>
                </div>
                <div>
                    <label htmlFor='age'>age</label>
                    <input id='age'/>
                </div>
                <div>
                    <label htmlFor='email'>email</label>
                    <input id='email'/>
                </div>
                <button>submit</button>
            </form>
        </div>
    )
}

export default AddFriend