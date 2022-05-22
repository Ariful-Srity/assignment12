import React from 'react';

const Blogs = () => {
    return (
        <div >



            <div class="card  bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">What are the different ways to manage a state in a React application?</h2>
                    <p>
                        Answer:
                        1.  Local state.
                        2. Global state.
                        3.  Server state.
                        4. URL state.
                    </p>

                </div>
            </div>


            <div class=" bg-primary text-primary-content ">
                <div class="card-body">
                    <h2 class="card-title ">How does prototypical inheritance work?</h2>
                    <p>
                        Answer:The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.

                    </p>

                </div>
            </div>



            <div class="card  bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?</h2>
                    <p>
                        Answer:
                        If you update it directly, calling the setState() afterward may just replace the update you made.
                        When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
                        You will lose control of the state across all components.
                    </p>

                </div>
            </div>



            <div class=" bg-primary text-primary-content ">
                <div class="card-body">
                    <h2 class="card-title "> You have an array of products. Each object has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                    <p>
                        Answer:If you need the index of the found element in the array, use findIndex() .
                        If you need to find the index of a value, use Array.prototype.indexOf() . ...
                        If you need to find if a value exists in an array, use Array.prototype.includes() .
                    </p>

                </div>
            </div>


            <div class="card  bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">What is a unit test? Why should write unit tests?</h2>
                    <p>
                        Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.

                    </p>

                </div>
            </div>



        </div>
    );
};

export default Blogs;