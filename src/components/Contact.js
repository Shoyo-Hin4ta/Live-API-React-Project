

const Contact = () => {
    return (
        <div>
            <h1 className="text-3xl mb-3"> 
                Contact Us
            </h1>

            <form>
                <label className="mx-2">Name</label>
                <input type="text" className="border-2 border-black" />
                <label className="mx-2">Message</label>
                <input type="text" className="border-2 border-black" />
                <button className="ml-4 border border-black bg-slate-300 p-1 rounded-lg">Submit</button>
            </form>
        </div>
    )
}

export default Contact;