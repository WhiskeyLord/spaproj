import React from 'react';
function Contact() {
    return (<>
    <div className='container'>
        <h1 className='#004d40 teal-text darken-4"'> Contact Us</h1>
        <div class="row ">
            <form class="col s12">
                <div class="row">
                    <div class="input-field col s6">
                        <input placeholder="Jacob" id="first_name" type="text" class="validate"/>
                            <label for="first_name">First Name</label>
                    </div>
                    <div class="input-field col s6">
                        <input placeholder="Jacobson" id="last_name" type="text" class="validate"/>
                            <label for="last_name">Last Name</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="phone" type="number" class="validate"/>
                            <label for="password">Phone number</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="email" type="email" class="validate"/>
                            <label for="email">Email</label>
                    </div>
                </div>
                
            </form>
        </div>
        </div>
    </>);
}

export { Contact };