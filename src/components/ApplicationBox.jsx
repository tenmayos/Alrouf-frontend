import React from "react";
import TextInputSlice from "./TextInputSlice";

function ApplicationBox() {

    const styleObj = {
        "marginTop": "2%",
        "marginBottom": "2%"
    }
    const [isMouseOn, setIsMouseOn] = React.useState(false);
    const [pdfResume, setPdfResume] = React.useState(null);

    function HandleMouseHover() {
        isMouseOn? setIsMouseOn(false) : setIsMouseOn(true);
    }

    function HandleFileInput(event) {
        let pdfFile = event.target.files[0];
        setPdfResume(pdfFile);
    }

    return (
        <div className="submission-box">
            <form>
                <TextInputSlice
                    style={styleObj}
                    placeholder="الاسم الاول"
                />
                <TextInputSlice
                    style={styleObj}
                    placeholder="اسم الأب"
                />
                <TextInputSlice
                    style={styleObj}
                    placeholder="اسم العائلة"
                />
                <TextInputSlice
                    style={styleObj}
                    placeholder="جامعة التخرج"
                />
                <TextInputSlice
                    style={styleObj}
                    placeholder="التخصص العلمي"
                />
                <TextInputSlice
                    style={styleObj}
                    placeholder="المعدل الجامعي"
                />
                <TextInputSlice
                    style={styleObj}
                    placeholder="المعدل الكلي"
                />
                <TextInputSlice
                    style={styleObj}
                    placeholder="رقم الهاتف"
                />
                <br />

                <label
                style={isMouseOn? {"background": "red"} : null}
                onMouseEnter={HandleMouseHover}
                onMouseLeave={HandleMouseHover}
                htmlFor="file-upload"
                className="file-upload-button">
                    {pdfResume === null? "ارفق السيرة الذاتية" : pdfResume.name}
                </label>
                <input id="file-upload" onChange={HandleFileInput} type="file" accept=".pdf" />
            </form>
        </div>
    );
}

export default ApplicationBox;