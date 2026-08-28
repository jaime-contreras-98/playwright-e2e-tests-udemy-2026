export default class TestData {
    static makeAppointmentData() {
        return [
            { testId: "TC001", facility: "Tokyo CURA Healthcare Center", hcp: "Medicare", visitDate: "05/10/2025" },
            { testId: "TC002", facility: "Hongkong CURA Healthcare Center", hcp: "Medicaid", visitDate: "05/11/2025" },
            { testId: "TC003", facility: "Seoul CURA Healthcare Center", hcp: "None", visitDate: "05/12/2025" },
        ];
    };

    static apiUserCreation() {
        return [
            {
                name: 'Alex',
                job: 'Tester',
                id: '123',
                createdAt: '2025-10-06T01:35:49:8772'
            }
        ]
    };
};