import React from "react";
import TextInputSlice from "./TextInputSlice";
import axios from "axios";

function ApplicationBox() {

    const styleObj = {
        "marginTop": "2%",
        "marginBottom": "2%"
    }
    const [isMouseOnRed, setIsMouseOnRed] = React.useState(false);
    const [isMouseOnGreen, setIsMouseOnGreen] = React.useState(false);
    const [isFormRecieved, setIsFormRecieved] = React.useState(false);
    const [fullFormData, setFullFormData] = React.useState({
        fullName: "",
        phone: "",
        email: "",
        school: "",
        major: "",
        gpa: "",
        totalGpa: "",
        doneVolunteerWork: false,
        ResumeFile: null
    });

    function HandleGlobalChange(event) {
        const { id, value } = event.target;

        if (id !== "ResumeFile") {
            setFullFormData(prevState => {
                return {
                    ...prevState,
                    [id]: value
                }
            });
        }
    }

    // No need to pick up the event argument since this func acts as a toggler.
    function HandleCheckBox() {
        
        setFullFormData((prevState) => {
            return {
                ...prevState,
                doneVolunteerWork: fullFormData.doneVolunteerWork? false : true
            }
        });
    }

    function HandleMouseHover(event) {

        const elementID = event.target.id;
        if (elementID === "red-button") {
            setIsMouseOnRed(!isMouseOnRed);
        } else {
            setIsMouseOnGreen(!isMouseOnGreen);
        }
    }

    function HandleFileInput(event) {
        if (!event.target.files[0])
        return;
        
        let pdfFile = event.target.files[0];
        setFullFormData(prevForm => {
            return {
                ...prevForm,
                "ResumeFile": pdfFile
            }
        });
    }

    // Currently we do not check the form's input because this is for demonstration purposes only, however in a real world app it is strongly discouraged
    // To implement a direct form input without checks and responses.

    function HandleSubmission(event) {
        event.preventDefault();
        setIsFormRecieved(true);
        // Start writing the storing logic then apply it here. vvvvv
        let formData = new FormData();
        for (var key in fullFormData) {
            console.log(key, fullFormData[key])
            formData.append(key, fullFormData[key]);
        }
        axios.post("http://localhost:4000", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
    return (
        <div className="submission-box">
            <form onSubmit={HandleSubmission}>
                {isFormRecieved ? <span style={{ "color": "green" }}>تم استلام الطلب بنجاح *</span> : null}
                <TextInputSlice
                    style={styleObj}
                    placeholder="الاسم الكامل"
                    id="fullName"
                    onChange={HandleGlobalChange}
                />
                <TextInputSlice
                    style={styleObj}
                    placeholder="رقم الهاتف"
                    id="phone"
                    onChange={HandleGlobalChange}
                />
                <TextInputSlice
                    style={styleObj}
                    placeholder="البريد الالكتروني"
                    id="email"
                    onChange={HandleGlobalChange}
                />
                <TextInputSlice
                    style={styleObj}
                    placeholder="جامعة التخرج"
                    id="school"
                    onChange={HandleGlobalChange}
                />
                <TextInputSlice
                    style={styleObj}
                    placeholder="التخصص العلمي"
                    id="major"
                    onChange={HandleGlobalChange}
                />
                <TextInputSlice
                    style={styleObj}
                    placeholder="المعدل الجامعي"
                    id="gpa"
                    type="number"
                    onChange={HandleGlobalChange}
                />
                <TextInputSlice
                    style={styleObj}
                    placeholder="المعدل الكلي"
                    id="totalGpa"
                    type="number"
                    onChange={HandleGlobalChange}
                />
                <input 
                id="doneVolunteerWork"
                type="checkbox"
                onChange={HandleCheckBox}
                />
                <span>هل قمت باعمال تطوعية؟</span>
                <br />

                <label
                    style={isMouseOnRed ? { "background": "red", "color": "white" } : null}
                    id="red-button"
                    onMouseEnter={HandleMouseHover}
                    onMouseLeave={HandleMouseHover}
                    htmlFor="ResumeFile"
                    className="file-upload-button textfield-topbot-margins">
                    {fullFormData.ResumeFile === null ? "ارفق السيرة الذاتية" : fullFormData.ResumeFile.name}
                </label>

                <input id="ResumeFile" onChange={HandleFileInput} type="file" accept=".pdf" />

                <br />

                <button
                    onMouseEnter={HandleMouseHover}
                    onMouseLeave={HandleMouseHover}
                    style={isMouseOnGreen ? { "background": "green", "color": "white" } : null}
                    className="submit-button"
                    type="submit">
                    ارسال
                </button>
            </form>
        </div>
    );
}

export default ApplicationBox;