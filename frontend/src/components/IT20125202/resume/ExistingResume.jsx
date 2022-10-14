import React, { useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import swal from 'sweetalert';
import validate from './validate';

/**
 * @description This component is to display the resume details for the user if the user has already created a resume with update and delete options
 */

const ExistingResume = () => {

    const [isLoading, setIsLoading] = React.useState(true);
    const [id, setId] = React.useState('');
    const [userId, setUserId] = React.useState('');
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [mobile, setMobile] = React.useState('');
    const [updatedDate, setUpdatedDate] = React.useState('');
    const [educationalQualifications, setEducationalQualifications] = React.useState([]);
    const [experience, setExperience] = React.useState([]);
    const [skills, setSkills] = React.useState([]);
    const [languages, setLanguages] = React.useState([]);
    const [referees, setReferees] = React.useState([]);

    // handleArrayAdd, handleArrayRemove, handleArrayChange methods are used to add, remove and change elements in arrays
    const handleArrayAdd = (array, setArray) => {
        setArray([...array, {}]);
    }

    const handleArrayRemove = (array, setArray, index) => {
        const list = [...array];
        list.splice(index, 1);
        setArray(list);
    }

    const handleArrayChange = (array, setArray, e, index) => {
        const { name, value } = e.target;
        const list = [...array];
        list[index][name] = value;
        setArray(list);
    }

    useEffect(() => {
        const usertoken = localStorage.userToken;
        const decoded = jwt_decode(usertoken);
        setUserId(decoded._id);
        axios.get(`http://localhost:5000/resumes/${userId}`)
            .then(response => {
                if (response.data.success) {
                    let data = response.data.exsitingResume;

                    setId(data._id);
                    setFirstName(data.firstName);
                    setLastName(data.lastName);
                    setEmail(data.email);
                    setMobile(data.mobile);
                    setUpdatedDate(data.updatedDate);
                    setEducationalQualifications(data.educationalQualifications);
                    setExperience(data.experience);
                    setSkills(data.skills);
                    setLanguages(data.languages);
                    setReferees(data.referees);
                    setIsLoading(false);
                }
            })
            .catch(error => {
                console.log('Error while fetching the resume details. Error: ', error)
            })
    }, [id, userId]);

    const updateData = (e) => {
        const resume = {
            email: email,
            mobile: mobile,
        }
        if (validate(resume)) {
            axios.patch(`http://localhost:5000/resumes/update/${id}`, {
                userId: userId,
                firstName: firstName,
                lastName: lastName,
                email: email,
                mobile: mobile,
                updatedDate: updatedDate,
                educationalQualifications: educationalQualifications,
                experience: experience,
                skills: skills,
                languages: languages,
                referees: referees,
            })
                .then(response => {
                    if (response.data.success) {
                        swal("Resume updated successfully!", "", "success")
                            .then((value) => {
                                if (value) {
                                    window.location.reload(false);
                                }
                            });
                    }
                })
                .catch(error => {
                    console.log('Error while updating the resume details. Error: ', error)
                }
                );
        }
    }

    const deleteResume = (e) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this resume!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(`http://localhost:5000/resumes/delete/${id}`).then((res) => {
                        swal("Resume Deleted Permanently!", "", "success")
                            .then((value) => {
                                if (value) {
                                    window.location.reload(false);
                                }
                            });
                    }).catch((err) => {
                        console.log('Error while deleting the resume details. Error: ', err);
                    })
                } else {
                    swal("Cancelled. Your resume is safe!");
                }
            });
    }

    if (isLoading) {
        return <div style={{ textAlign: 'çenter' }}> <h3>Loading...</h3></div>;
    }

    return (
        <div className="container-fluid" style={{ maxWidth: 800 }}>
            <form>
                <br />
                <h6 style={{ textAlign: 'center' }}> Details in the resume will be automatically filled in the application forms. </h6>
                <hr />
                <br />
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            {/* applict's first name */}
                            <label htmlFor="firstNameInput"><h6>First Name </h6> </label>
                            <input type="text" name='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} className="form-control" id="firstNameInput" aria-describedby="firstNameHelp" placeholder="Enter first name" required />
                            <small id="firstNameHelp" className="form-text text-muted"></small>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            {/* applicant's last name */}
                            <label htmlFor="lastNameInput"><h6>Last Name </h6> </label>
                            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="form-control" id="lastNameInput" aria-describedby="lastNameHelp" placeholder="Enter last name" required />
                            <small id="lastNameHelp" className="form-text text-muted"></small>
                        </div>
                    </div>
                </div>
                <br />
                <div className="form-group">
                    {/* applicant's email */}
                    <label htmlFor="EmailInput"><h6>Email Address </h6> </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="EmailInput" aria-describedby="emailHelp" placeholder="Enter email" required />
                    <small id="emailHelp" className="form-text text-muted"></small>
                </div>
                <br />
                <div className="form-group">
                    {/* applicant's phone number */}
                    <label htmlFor="mobileNumber"><h6>Mobile Number </h6> </label>
                    <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} className="form-control" id="mobileNumber" aria-describedby="mobileHelp" placeholder="Enter mobile number" required />
                    <small id="mobileHelp" className="form-text text-muted"></small>
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="educationalQualifications"><h6>Education </h6> </label>
                    {educationalQualifications.map((oneQualification, index) => (
                        <div key={index}>
                            <div className="form-group">
                                {/* educational qualifications */}
                                <textarea className="form-control" id="educationalQualifications" rows="3" required
                                    name='qualification'
                                    value={oneQualification.qualification}
                                    onChange={(e) => handleArrayChange(educationalQualifications, setEducationalQualifications, e, index)}
                                />
                            </div>
                            <br />
                            <div>
                                {educationalQualifications.length > 1 &&
                                    <button type='button' className="btn btn-outline-dark" onClick={() => handleArrayRemove(educationalQualifications, setEducationalQualifications, index)}>
                                        <span>Remove</span>
                                    </button>
                                }
                            </div>
                            <br />
                            {educationalQualifications.length - 1 === index &&
                                <button type='button' className="btn btn-outline-dark" onClick={() => handleArrayAdd(educationalQualifications, setEducationalQualifications)}>
                                    <span>Add education</span>
                                </button>
                            }
                        </div>
                    ))}
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1"><h6>Experience</h6></label>
                    {experience.map((oneExperience, index) => (
                        <div key={index}>
                            <div className="form-group">
                                {/* experience */}
                                <textarea className="form-control" id="experience" rows="3"
                                    name='experience'
                                    value={oneExperience.experience}
                                    onChange={(e) => handleArrayChange(experience, setExperience, e, index)}
                                />
                            </div>
                            <br />
                            <div>
                                {experience.length > 1 &&
                                    <button type='button' className="btn btn-outline-dark" onClick={() => handleArrayRemove(experience, setExperience, index)}>
                                        <span>Remove</span>
                                    </button>
                                }
                            </div>
                            <br />
                            {experience.length - 1 === index &&
                                <button type='button' className="btn btn-outline-dark" onClick={() => handleArrayAdd(experience, setExperience)}>
                                    <span>Add experience</span>
                                </button>
                            }
                        </div>
                    ))}
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="skills"><h6>Skills </h6></label>
                    {skills.map((oneSkill, index) => (
                        <div key={index}>
                            <div className="form-group">
                                {/* skills */}
                                <input type='text' className="form-control" id="skills" rows="3"
                                    name='skill'
                                    value={oneSkill.skill}
                                    onChange={(e) => handleArrayChange(skills, setSkills, e, index)}
                                />
                            </div>
                            <br />
                            <div>
                                {skills.length > 1 &&
                                    <button type='button' className="btn btn-outline-dark" onClick={() => handleArrayRemove(skills, setSkills, index)}>
                                        <span>Remove</span>
                                    </button>
                                }
                            </div>
                            <br />
                            {skills.length - 1 === index &&
                                <button type='button' className="btn btn-outline-dark" onClick={() => handleArrayAdd(skills, setSkills)}>
                                    <span>Add skill</span>
                                </button>
                            }
                        </div>
                    ))}
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="languages"><h6>Languages </h6></label>
                    {languages.map((oneLanguage, index) => (
                        <div key={index}>
                            <div className="form-group">
                                {/* languages */}
                                <input type='text' className="form-control" id="languages" rows="2"
                                    name='language'
                                    value={oneLanguage.language}
                                    onChange={(e) => handleArrayChange(languages, setLanguages, e, index)}
                                />
                            </div>
                            <br />
                            <div>
                                {languages.length > 1 &&
                                    <button type='button' className="btn btn-outline-dark" onClick={() => handleArrayRemove(languages, setLanguages, index)}>
                                        <span>Remove</span>
                                    </button>
                                }
                            </div>
                            <br />
                            {languages.length - 1 === index &&
                                <button type='button' className="btn btn-outline-dark" onClick={() => handleArrayAdd(languages, setLanguages)}>
                                    <span>Add language</span>
                                </button>
                            }
                        </div>
                    ))}
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="referees"><h6>Referees</h6></label>
                    {referees.map((oneReferee, index) => (
                        <div key={index}>
                            <div className="form-group">
                                {/* referees */}
                                <textarea className="form-control" id="referees" rows="3"
                                    name='referee'
                                    value={oneReferee.referee}
                                    onChange={(e) => handleArrayChange(referees, setReferees, e, index)}
                                />
                            </div>
                            <br />
                            <div>
                                {referees.length > 1 &&
                                    <button type='button' className="btn btn-outline-dark" onClick={() => handleArrayRemove(referees, setReferees, index)}>
                                        <span>Remove</span>
                                    </button>
                                }
                            </div>
                            <br />
                            {referees.length - 1 === index &&
                                <button type='button' className="btn btn-outline-dark" onClick={() => handleArrayAdd(referees, setReferees)}>
                                    <span>Add referee</span>
                                </button>
                            }
                        </div>
                    ))}
                </div>
                <br /><br />
                <div style={{ textAlign: 'center' }}>
                    <button type="button" className="btn btn-outline-success" onClick={(e) => updateData(e)}> <h5>Update</h5></button>
                </div>
                &nbsp;
                <div style={{ textAlign: 'center' }}>
                    <button type="button" className="btn btn-outline-danger" onClick={(e) => deleteResume(e)}> <h5>Delete resume</h5></button>
                </div>
                <br /><br />
            </form>
        </div>
    )
}

export default ExistingResume;