## SDK для клиентов АлгоМаркета

### Как это работает

1. Отправляет HTTP запрос на шлюз с ID алгоритма и входными данными. В ответе, если задача в пуле, возращается ID залачи.
2. Через FireBase SDK для FireStore подписываемся на коллекцию results с ID задачи.
3. Отдаем результат клиенту.