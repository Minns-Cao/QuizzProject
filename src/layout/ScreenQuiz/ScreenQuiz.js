import React from "react";

export default function ScreenQuiz() {
    // main screen
    //Container component - luôn luôn gọi API tại main screen
    //Presentation Component - Component con nhận data
    // luôn luôn gọi api tại main screen
    // truyền data cho các component con => tái sử dụng
    // đạt chuẩn The Single Source Of Truth

    const HandleSubmit = () => {
        import("../../utils/StringManage").then((n) => n.isUpperCase());
    };

    return (
        <div>
            ScreenQuiz
            <button onClick={HandleSubmit}>Submit</button>
        </div>
    );
}
