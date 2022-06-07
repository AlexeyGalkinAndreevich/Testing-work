-- SET SQL_SAFE_UPDATES = 0;
-- update services_rendered,services set services_rendered.summa = services.price * services_rendered.amount
-- where services_rendered.id_service = services.id_service;

-- select transactions.id_transaction, sum(services_rendered.summa) as summa_transaction from services_rendered,transactions
-- where services_rendered.id_transaction = transactions.id_transaction
-- group by transactions.id_transaction;

-- select transactions.id_transaction, sum(services.price * services_rendered.amount) summa_transaction from services_rendered,transactions,services
-- where services_rendered.id_transaction = transactions.id_transaction and  services_rendered.id_service = services.id_service
-- group by transactions.id_transaction;