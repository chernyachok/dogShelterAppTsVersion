import React, {Component} from 'react';

const ContactForm = () => (
      <div class="row">
       <form class="col s12">
         <h4>Leave your rewiew</h4>
         <div class="row">
           <div class="input-field col s12">
             <input id="email" type="email" class="validate"/>
             <label for="email">Email</label>
             <textarea placeholder="Description" className="materialize-textarea"></textarea><br/>
             <input type="submit" className="btn btn-gray" value="Send"/>
           </div>
         </div>
       </form>
      </div>
)
export default ContactForm;
