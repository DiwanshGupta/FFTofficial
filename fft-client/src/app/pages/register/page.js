"use client";
import { login } from "@/app/slice/authSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Register = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [registerAsTeacher, setRegisterAsTeacher] = useState(false);
    const [studentFormData, setStudentFormData] = useState({
        name: "",
        collage: "",
        semester: "",
        branch: "",
        email: "",
        password: "",
    });
    const [teacherFormData, setTeacherFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleStudentSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await fetch("http://localhost:5000/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: studentFormData.name,
                email: studentFormData.email,
                password: studentFormData.password,
                college: studentFormData.collage,
                semester: studentFormData.semester,
                branch: studentFormData.branch,
            }),
        });
        if (response.ok) {
            // Handle successful response
            const data = await response.json();
            dispatch(login({ user: data.userData, token: data.token }));
            router.push("/");
        } else {
            // Handle error response
            const errorMessage = await response.json(); // Extract error message from response body
            console.error("Login failed:", errorMessage.message);
        }
        } catch (error) {
        // Handle network error
        console.error("Network error:", error.message);
        }
    };
    const handleTeacherSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        try {
        const response = await fetch(
            "http://localhost:5000/auth/teacher/register",
            {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: teacherFormData.username,
                email: teacherFormData.email,
                password: teacherFormData.password,
            }),
            }
        );
        if (response.ok) {
            // Handle successful response
            const data = await response.json();
            console.log(data);
            dispatch(login({ user: data.userData, token: data.token }));
            router.push("/");
        } else {
            // Handle error response
            const errorMessage = await response.json(); // Extract error message from response body
            console.error("Login failed:", errorMessage.message);
        }
        } catch (error) {
        // Handle network error
        console.error("Network error:", error.message);
        }
    };

    return (
        <div className="max-h-screen my-48 py-8 px-8 bg-transparent shadow-2xl max-w-2xl mx-auto rounded-2xl min-h-fit hover:shadow-lg">
        <div className=" pb-4 text-6xl text-center text-yellow-600/80 font-bold ">
            <span className="py-4">Register</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 text-2xl md:text-center text-yellow-600/80 font-bold">
            <span
            className={`text-center md:border-r-4 border-r-yellow-600 cursor-pointer`}
            onClick={() => setRegisterAsTeacher(false)}
            >
            <span
                className={`${
                !registerAsTeacher &&
                "shadow-2xl shadow-black border mx-24 px-1 rounded-md bg-white"
                }`}
            >
                Student
            </span>
            </span>
            <span
            className={`text-center cursor-pointer ${
                registerAsTeacher &&
                " shadow-2xl shadow-black border mx-24 px-1 rounded-md bg-white"
            }`}
            onClick={() => setRegisterAsTeacher(true)}
            >
            Teacher
            </span>
        </div>
        <hr className=" text-center border-2 mx-10 border-yellow-300" />
        <div className="flex items-center justify-center p-3 mx-auto flex-col md:flex-row md:items-center gap-5">
            <div className="flex-1 text-white mx-0 md:mx-32">
            {!registerAsTeacher ? (
                <form className="flex flex-col gap-4">
                <div>
                    <span className="text-[#FEAF05] py-4 text-xl">
                    Name
                    <br />
                    <input
                        type=""
                        placeholder="Enter name....."
                        id="name"
                        name="name"
                        value={studentFormData.name}
                        onChange={(ev) => {
                        setStudentFormData({
                            ...studentFormData,
                            name: ev.target.value,
                        });
                        }}
                        className="w-3/4 md:w-full h-10 pl-2 rounded-md bg-gradient-to-r from-yellow-100 to-yellow-500 border-2 hover:bg-gradient-radial text-black/80"
                    />
                    </span>
                    <span className="text-[#FEAF05] py-4 text-xl">
                    Collage <br />
                    <input
                        type=""
                        placeholder="collage...."
                        id="collage"
                        name="collage"
                        value={studentFormData.collage}
                        onChange={(ev) => {
                        setStudentFormData({
                            ...studentFormData,
                            collage: ev.target.value,
                        });
                        }}
                        className="w-3/4 md:w-full h-10 pl-2 rounded-md bg-gradient-to-r from-yellow-100 to-yellow-500 border-2 hover:bg-gradient-radial text-black/80"
                    />
                    </span>
                    <span className="text-[#FEAF05] py-4 text-xl">
                    Semester
                    <br />
                    <input
                        type=""
                        placeholder="semester..."
                        id="semester"
                        name="semester"
                        value={studentFormData.semester}
                        onChange={(ev) =>
                        setStudentFormData({
                            ...studentFormData,
                            semester: ev.target.value,
                        })
                        }
                        className="w-3/4 md:w-full h-10 pl-2 rounded-md bg-gradient-to-r from-yellow-100 to-yellow-500 border-2 hover:bg-gradient-radial text-black/80"
                    />
                    </span>
                    <span className="text-[#FEAF05] py-4 text-xl">
                    Branch
                    <br />
                    <input
                        type=""
                        placeholder="Branch,..."
                        id="branch"
                        name="branch"
                        value={studentFormData.branch}
                        onChange={(ev) =>
                        setStudentFormData({
                            ...studentFormData,
                            branch: ev.target.value,
                        })
                        }
                        className="w-3/4 md:w-full h-10 pl-2 rounded-md bg-gradient-to-r from-yellow-100 to-yellow-500 border-2 hover:bg-gradient-radial text-black/80"
                    />
                    </span>
                    <span className="text-[#FEAF05] py-4 text-xl">
                    Your email
                    <br />
                    <input
                        type="email"
                        placeholder="test@email.com"
                        id="email"
                        name="email"
                        className="w-3/4 md:w-full h-10 pl-2 rounded-md bg-gradient-to-r from-yellow-100 to-yellow-500 border-2 hover:bg-gradient-radial text-black/80"
                        value={studentFormData.email}
                        onChange={(ev) =>
                        setStudentFormData({
                            ...studentFormData,
                            email: ev.target.value,
                        })
                        }
                    />
                    <br />
                    </span>
                    <span className="text-[#FEAF05] py-4 text-xl">
                    Password
                    <br />
                    <input
                        type="password"
                        placeholder="*******"
                        id="password"
                        name="password"
                        className="w-3/4 md:w-full h-10 pl-2 rounded-md bg-gradient-to-r from-yellow-100 to-yellow-500 border-2 hover:bg-gradient-radial text-black/80"
                        value={studentFormData.password}
                        onChange={(ev) =>
                        setStudentFormData({
                            ...studentFormData,
                            password: ev.target.value,
                        })
                        }
                    />
                    <br />
                    </span>
                    <span
                    onClick={handleStudentSubmit}
                    className="border mt-4 px-2 py-1 cursor-pointer bg-yellow-500 rounded-lg hover:bg-transparent hover:border-yellow-700 hover:text-black"
                    >
                    Register
                    </span>
                </div>
                </form>
            ) : (
                <form
                className="flex flex-col gap-4"
                onSubmit={handleTeacherSubmit}
                >
                <div>
                    <span className="text-[#FEAF05] py-4 text-xl">
                    username
                    <br />
                    <input
                        type="text"
                        placeholder="Enter username....."
                        id="username"
                        name="username"
                        value={teacherFormData.username}
                        onChange={(ev) => {
                        setTeacherFormData((prevState) => ({
                            ...prevState,
                            username: ev.target.value,
                        }));
                        }}
                        className="w-3/4 md:w-full h-10 pl-2 rounded-md bg-gradient-to-r from-yellow-100 to-yellow-500 border-2 hover:bg-gradient-radial text-black/80"
                    />
                    </span>
                    <span className="text-[#FEAF05] py-4 text-xl">
                    Your email
                    <br />
                    <input
                        type="email"
                        placeholder="test@email.com"
                        id="email"
                        name="email"
                        className="w-3/4 md:w-full h-10 pl-2 rounded-md bg-gradient-to-r from-yellow-100 to-yellow-500 border-2 hover:bg-gradient-radial text-black/80"
                        value={teacherFormData.email}
                        onChange={(ev) =>
                        setTeacherFormData((prevState) => ({
                            ...prevState,
                            email: ev.target.value,
                        }))
                        }
                    />
                    <br />
                    </span>
                    <span className="text-[rgb(254,175,5)] py-4 text-xl">
                    Password
                    <br />
                    <input
                        type="password"
                        placeholder="*******"
                        id="password"
                        name="password"
                        className="w-3/4 md:w-full h-10 pl-2 rounded-md bg-gradient-to-r from-yellow-100 to-yellow-500 border-2 hover:bg-gradient-radial text-black/80"
                        value={teacherFormData.password}
                        onChange={(ev) =>
                        setTeacherFormData((prevState) => ({
                            ...prevState,
                            password: ev.target.value,
                        }))
                        }
                    />
                    <br />
                    </span>
                    <button
                    type="submit"
                    className="border mt-4 px-2 py-1 bg-yellow-500 rounded-lg hover:bg-transparent hover:border-yellow-700 hover:text-black"
                    >
                    Register
                    </button>
                </div>
                </form>
            )}
            <div className="flex flex-col md:flex-row gap-2 text-sm mt-5">
                <span className="text-black">Already have an account?</span>
                <Link
                href="/pages/login"
                className="text-blue-500/80 cursor-pointer"
                >
                Login
                </Link>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Register;
