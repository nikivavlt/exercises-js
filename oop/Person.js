class Person {
  firstName;

  lastName;

  birthYear;

  birthMonth;

  birthDay;

  constructor(firstName, lastName, birthYear, birthMonth, birthDay) {
    try {
      if (firstName === null || firstName === ' ') {
        throw new Error("FirstName can't be null or whitespace");
      }

      if (lastName === null || lastName === ' ') {
        throw new Error("LastName can't be null or whitespace");
      }

      const birth = new Date();
      birth.setFullYear(birthYear, birthMonth - 1, birthDay);
      if (birth > new Date()) {
        throw new Error("Birthday date is greater than current day");
      }
      this.firstName = firstName;
      this.lastName = lastName;
      this.birthYear = birthYear;
      this.birthMonth = birthMonth;
      this.birthDay = birthDay;
    } catch (error) {
      throw (error);
    }
  }

  getFirstName() {
    return this.firstName;
  }

  getLastName() {
    return this.lastName;
  }

  getBirthYear() {
    return this.birthYear;
  }

  getBirthMonth() {
    return this.birthMonth;
  }

  getBirthDay() {
    return this.birthDay;
  }

  getPersonAge() {
    return (new Date().getFullYear()) - this.getBirthYear();
  }

  getPersonInformation() {
    return {
      firstName: this.getFirstName(),
      lastName: this.getLastName(),
      Age: this.getPersonAge(),
    };
  }

  getDayNumberBeforeBirthday() {
    const today = new Date();
    const birthDay = new Date(
      this.getBirthYear(),
      this.getBirthMonth() - 1,
      this.getBirthDay() + 1,
    );

    const upcomingBirthDay = new Date(today.getFullYear(), birthDay.getMonth(), birthDay.getDate());

    upcomingBirthDay.setFullYear(today.getFullYear());

    if (today > upcomingBirthDay) upcomingBirthDay.setFullYear(upcomingBirthDay.getFullYear() + 1);

    const oneDay = 24 * 60 * 60 * 1000;

    const daysLeft = Math.ceil((upcomingBirthDay.getTime() - today.getTime()) / (oneDay));

    return daysLeft;
  }
}

const person = new Person('Nikita', 'Ivanov', 2000, 5, 17);

console.log(person);
