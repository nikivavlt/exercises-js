class Person {
  firstName;

  lastName;

  birthYear;

  birthMonth;

  birthDay;

  constructor(firstName, lastName, birthYear, birthMonth, birthDay) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.birthMonth = birthMonth;
    this.birthDay = birthDay;
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

const person = new Person('Nikita', 'Ivanov', 2000, 11, 1);

console.log(person.getDayNumberBeforeBirthday());
