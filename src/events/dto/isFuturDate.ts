import { registerDecorator, ValidationOptions } from 'class-validator';

export function IsFutureDate(validationOptions?: ValidationOptions) {
    return function (object: unknown, propertyName: string) {
        registerDecorator({
            name: 'isFutureDate',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value: any) {
                    const today = new Date();
                    today.setHours(0, 0, 0, 0); // Normalize to the start of the day
                    return typeof value === 'object' && value >= today; // you can return a Promise<boolean> here as well, if you want to make async validation

                },
            },
        });
    };
}