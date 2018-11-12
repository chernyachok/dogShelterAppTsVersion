import * as React from 'react';

const ContactForm = () => (
      <div className="row">
       <form className="col s12">
         <h4>Leave your rewiew</h4>
         <div className="row">
           <div className="input-field col s12">
             <input id="email" type="email" className="validate"/>
             <label htmlFor="email">Email</label>
             <textarea placeholder="Description" className="materialize-textarea"></textarea><br/>
             <input type="submit" className="btn btn-gray" value="Send"/>
           </div>
         </div>
       </form>
      </div>
)
export default ContactForm;
