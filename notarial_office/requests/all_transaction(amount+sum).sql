select clients.title, count(clients.id_client) amount_transactions, sum(services_rendered.summa) sum_all_transaction from transactions, clients,services_rendered
where clients.id_client = transactions.id_client and services_rendered.id_transaction = transactions.id_transaction
group by clients.id_client;
-- select * from 
-- select * from transactions;
-- select * from services_rendered;