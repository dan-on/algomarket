# АлгоМаркет

Открытый маркетплейс алгоримов с возможностью использования по модели Pay-As-You-Go (PAYG).

## Структура проекта

### client-js-sdk

JavaScript SDK для клиентов. Представлен набор функций, позволяющий просто и удобно добавлять задачи для алгоритмов в пул и отслеживать их состояние.

### publisher-js-sdk

JavaScript SDK для издаталей. Предоставлен набор функций для подключения алгоритма к маркетплейсу.

### marketplace

Web-based приложение для маркетплейса на Angular. В папке functions находится backend API маркетплейса и шлюз для приема, валидации данных, диспетчеризации и тарификации вызовов.