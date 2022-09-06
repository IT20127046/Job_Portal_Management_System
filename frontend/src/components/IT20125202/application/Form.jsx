import React, { useEffect } from 'react';
import './form.css';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import validateApplication from './validations';

const Form = () => {

    const [vacancyNo, setVacancyNo] = React.useState('002'); //should get from the selected vacancy 
    const [companyId, setCompanyId] = React.useState('002'); //should get from the selected vacancy 
    const [companyName, setCompanyName] = React.useState('compnay name 2'); //should get from the selected vacancy 
    const [applicantId, setapplicantId] = React.useState(''); //should get from the current session
    const [jobTitle, setJobTitle] = React.useState('title 2'); //should get from the selected vacancy 
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [educationalQualifications, setEducationalQualifications] = React.useState([{}]);
    const [experience, setExperience] = React.useState([{}]);
    const [skills, setSkills] = React.useState([{}]);
    const [languages, setLanguages] = React.useState([{}]);
    const [referees, setReferees] = React.useState([{}]);
    const [coverLetter, setCoverLetter] = React.useState('');
    const [additionalInformation, setAdditionalInformation] = React.useState('');

    useEffect(() => {
        document.title = "Application";

        const usertoken = localStorage.userToken;
        const decoded = jwt_decode(usertoken);

        setapplicantId(decoded._id);
    });



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


    const saveData = async (e) => {
        e.preventDefault();

        let application = {
            vacancyNo: vacancyNo,
            companyId: companyId,
            companyName: companyName,
            applicantId: applicantId,
            jobTitle: jobTitle,
            applicantFirstName: firstName,
            applicantLastName: lastName,
            applicantEmail: email,
            applicantPhone: phone,
            appliedDate: new Date(),
            educationalQualifications: educationalQualifications,
            experience: experience,
            skills: skills,
            languages: languages,
            referees: referees,
            coverLetter: coverLetter,
            additionalInformation: additionalInformation,
            status: 'Pending',
            comments: ''
        }

        // console.log(application);
        
        if (validateApplication(application)) {  //validate the application before saving it
            await axios.post('http://localhost:5000/applications/apply', application).then(res => {

                // console.log(res);
                // console.log(res.data);
                alert('Application submitted successfully');

                setVacancyNo('');
                setCompanyId('');
                setCompanyName('');
                setapplicantId('');
                setJobTitle('');
                setFirstName('');
                setLastName('');
                setEmail('');
                setPhone('');
                setEducationalQualifications([{}]);
                setExperience([{}]);
                setSkills([{}]);
                setLanguages([{}]);
                setReferees([{}]);
                setCoverLetter('');
                setAdditionalInformation('');



            }).catch(error => {
                if (error.response.status === 400) {
                    alert('Please fill all the marked fields')
                }
                // console.log(error);
            }).finally(() => {

            }
            );
        }
    }

    return (
        <div className="container-fluid" style={{ maxWidth: 800 }}>
            <form>
                <br />
                <hr />
                <h6> All the fields marked with the (<span className="required_label" /> ) should be filled. </h6>
                <br />
                {/* First three fields should be filled automatically when click the apply button in vacancy */}
                <div className="form-group">
                    {/* vacancy no */}
                    <label htmlFor="vacancyNo"><h6>Vacancy No.</h6></label>
                    <input type="text" className="form-control" id="vacancyNo" aria-describedby="vacancyNoHelp" placeholder={vacancyNo} readOnly />
                    <small id="vacancyNoHelp" className="form-text text-muted"></small>
                </div>
                <br />
                <div className="form-group">
                    {/* company  */}
                    <label htmlFor="company"><h6>Company</h6></label>
                    <input type="text" className="form-control" id="company" aria-describedby="companyHelp" placeholder={companyName} readOnly />
                    <small id="companyHelp" className="form-text text-muted"></small>
                </div>
                <br />
                <div className="form-group">
                    {/* job title */}
                    <label htmlFor="jobTitle"><h6>Job title</h6></label>
                    <input type="text" className="form-control" id="jobTitle" aria-describedby="jobTitleHelp" placeholder={jobTitle} readOnly />
                    <small id="jobTitleHelp" className="form-text text-muted"></small>
                </div>
                <br />

                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            {/* applict's first name */}
                            <label htmlFor="firstNameInput"><h6>First name </h6><span className="required_label" /> </label>
                            <input type="text" name='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} className="form-control" id="firstNameInput" aria-describedby="firstNameHelp" placeholder="Enter first name" required />
                            <small id="firstNameHelp" className="form-text text-muted"></small>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            {/* applicant's last name */}
                            <label htmlFor="lastNameInput"><h6>Last name </h6><span className="required_label" /> </label>
                            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="form-control" id="lastNameInput" aria-describedby="lastNameHelp" placeholder="Enter last name" required />
                            <small id="lastNameHelp" className="form-text text-muted"></small>
                        </div>
                    </div>
                </div>
                <br />
                <div className="form-group">
                    {/* applicant's email */}
                    <label htmlFor="EmailInput"><h6>Email address </h6><span className="required_label" /> </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="EmailInput" aria-describedby="emailHelp" placeholder="Enter email" required />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <br />
                <div className="form-group">
                    {/* applicant's phone number */}
                    <label htmlFor="mobileNumber"><h6>Mobile number </h6><span className="required_label" /> </label>
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" id="mobileNumber" aria-describedby="mobileHelp" placeholder="Enter mobile number" required />
                    <small id="mobileHelp" className="form-text text-muted">We'll never share your mobile number with anyone else.</small>
                </div>
                <br />
                {educationalQualifications.map((oneQualification, index) => (
                    <div key={index}>
                        <div className="form-group">
                            {/* educational qualifications */}
                            <label htmlFor="educationalQualifications"><h6>Education </h6><span className="required_label" /> </label>
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
                <br />
                {experience.map((oneExperience, index) => (
                    <div key={index}>
                        <div className="form-group">
                            {/* experience */}
                            <label htmlFor="exampleInputEmail1"><h6>Experience</h6></label>
                            <textarea className="form-control" id="experience" rows="3"
                                name='experience'
                                value={oneExperience.experience}
                                onChange={(e) => handleArrayChange(experience, setExperience, e, index)}
                            />
                        </div>
                        <br />
                        {experience.length > 1 &&
                            <button type='button' className="btn btn-outline-dark" onClick={() => handleArrayRemove(experience, setExperience, index)}>
                                <span>Remove</span>
                            </button>
                        }
                        <br />
                        {experience.length - 1 === index &&
                            <button type='button' className="btn btn-outline-dark" onClick={() => handleArrayAdd(experience, setExperience)}>
                                <span>Add experience</span>
                            </button>
                        }
                    </div>
                ))}
                <br />
                {skills.map((oneSkill, index) => (
                    <div key={index}>
                        <div className="form-group">
                            {/* skills */}
                            <label htmlFor="skills"><h6>Skills </h6><span className="required_label" /></label>
                            <input type='text' className="form-control" id="skills" rows="3"
                                name='skill'
                                value={oneSkill.skill}
                                onChange={(e) => handleArrayChange(skills, setSkills, e, index)}
                            />
                        </div>
                        <br />
                        {skills.length > 1 &&
                            <button type='button' className="btn btn-outline-dark" onClick={() => handleArrayRemove(skills, setSkills, index)}>
                                <span>Remove</span>
                            </button>
                        }
                        <br />
                        {skills.length - 1 === index &&
                            <button type='button' className="btn btn-outline-dark" onClick={() => handleArrayAdd(skills, setSkills)}>
                                <span>Add skill</span>
                            </button>
                        }
                    </div>
                ))}
                <br />
                {languages.map((oneLanguage, index) => (
                    <div key={index}>
                        <div className="form-group">
                            {/* languages */}
                            <label htmlFor="languages"><h6>Languages </h6><span className="required_label" /></label>
                            <input type='text' className="form-control" id="languages" rows="2"
                                name='language'
                                value={oneLanguage.language}
                                onChange={(e) => handleArrayChange(languages, setLanguages, e, index)}
                            />
                        </div>
                        <br />
                        {languages.length > 1 &&
                            <button type='button' className="btn btn-outline-dark" onClick={() => handleArrayRemove(languages, setLanguages, index)}>
                                <span>Remove</span>
                            </button>
                        }
                        <br />
                        {languages.length - 1 === index &&
                            <button type='button' className="btn btn-outline-dark" onClick={() => handleArrayAdd(languages, setLanguages)}>
                                <span>Add language</span>
                            </button>
                        }
                    </div>
                ))}
                <br />
                {referees.map((oneReferee, index) => (
                    <div key={index}>
                        <div className="form-group">
                            {/* referees */}
                            <label htmlFor="referees"><h6>Referees</h6></label>
                            <textarea className="form-control" id="referees" rows="3"
                                name='referee'
                                value={oneReferee.referee}
                                onChange={(e) => handleArrayChange(referees, setReferees, e, index)}
                            />
                        </div>
                        <br />
                        {referees.length > 1 &&
                            <button type='button' className="btn btn-outline-dark" onClick={() => handleArrayRemove(referees, setReferees, index)}>
                                <span>Remove</span>
                            </button>
                        }
                        <br />
                        {referees.length - 1 === index &&
                            <button type='button' className="btn btn-outline-dark" onClick={() => handleArrayAdd(referees, setReferees)}>
                                <span>Add referee</span>
                            </button>
                        }
                    </div>
                ))}
                <br />
                <div className="form-group">
                    {/* cover letter */}
                    <label htmlFor="coverLetter"><h6>Cover Letter </h6><span className="required_label" /> </label>
                    <textarea value={coverLetter} onChange={(e) => setCoverLetter(e.target.value)} className="form-control" id="coverLetter" rows="5" required ></textarea>
                </div>
                <br />
                <div className="form-group">
                    {/* additional information */}
                    <label htmlFor="additionalInfo"><h6>Additional information</h6></label>
                    <textarea value={additionalInformation} onChange={(e) => setAdditionalInformation(e.target.value)} className="form-control" id="additionalInfo" rows="3"></textarea>
                </div>
                <br />
                <br />
                <div style={{ textAlign: 'center' }}>
                    <button type="button" className="btn btn-outline-success" onClick={(e) => saveData(e)}> <h5>Submit</h5></button>
                </div>
                <br />
                <br />
            </form>
        </div>
    )
}

export default Form;