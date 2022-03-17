from tkinter import *
from tkinter import ttk

root = Tk()
#root.resizable(False, False) # пользователь не может изменять размер окна
root.title("Работа с графикой")
root.geometry("800x600")


ox = 500
oy = 500
frame = Frame(root, width=300, height=500)

frame.pack(side=LEFT)
frame1 = Frame(root, width=300, height=500)
frame1.pack()
l = Label(frame1, text="График координат", font=30)
l.pack()
c = Canvas(frame1, width=ox, height=oy)
c.pack()

#
#
# # ПОСТРОЕНИЕ ГРАФИКОВ ФУНКЦИИ
km = 30
def myrange(x, y, jump):
    while x < y:
        yield x
        x += jump
def os(x, y, m):
    c.create_line(x // 2, 0, x // 2, y)
    c.create_line(0, y // 2, x, y // 2)
def graph(xn, xk, b, k, x, y, m):
    sx = x // 2
    sy = y // 2
    yn = xn * k + b
    for x2 in myrange(xn, xk, 0.01):
        y2 = x2 * k + b
        c.create_line(xn * m + sx, -yn * m + sy, x2 * m + sx, -y2 * m + sy, fill="green",
                      width=2)
        xn = x2
        yn = y2

def graph1(xn, xk, k, x, y, m):
    sx = x // 2
    sy = y // 2
    yn = k/xn
    for x2 in myrange(xn, xk, 0.01):
        if x2 == 0:
            continue
        else:
            y2 = k/x2
            c.create_line(xn * m + sx, -yn * m + sy, x2 * m + sx, -y2 * m + sy, fill="green",
                        width=2)
            c.create_line(-xn * m + sx, yn * m + sy, -x2 * m + sx, y2 * m + sy, fill="green",
                        width=2)
            xn = x2
            yn = y2
def graph2(xn, xk, a, b, c1, x, y, m):
    sx = x // 2
    sy = y // 2
    yn = a * (xn * xn) + b*xn + c1
    for x2 in myrange(xn, xk, 0.01):
        y2 = a * x2 * x2 + b*x2 + c1
        c.create_line(xn * m + sx, -yn * m + sy, x2 * m + sx, -y2 * m + sy, fill="green",
                    width=2)
        xn = x2
        yn = y2



# graph1(0.1, 10, 3, ox, oy, km)
# graph(-5, 5, 0, 1, ox, oy, km)
# graph2(-5, 15, -1, 0, 0, ox, oy, km)
os(ox, oy, km)
grafics = ["kx + b", "k/x","ax**2 + bx + c"]

def g():
    def get_entrys():
        value1 = k.get()
        value2 = x.get()
        value3 = x.get()
        value4 = b.get()

    fra0 = Frame(frame)
    fra0.pack()
    fra = Frame(fra0)
    fra.pack()
    fra1 = Frame(fra0)
    fra1.pack()
    fra2 = Frame(fra0)
    fra2.pack()
    fra3 = Frame(fra0)
    fra3.pack()
    l1 = Label(fra, text="k  ")
    l1.pack(side=LEFT)
    k = Entry(fra, width=10)
    k.pack(side=LEFT)

    l2 = Label(fra1, text="x  ")
    l2.pack(side=LEFT)
    x = Entry(fra1, width=10)
    x.pack(side=LEFT)
    l3 = Label(fra2, text="x1")
    l3.pack(side=LEFT)
    x1 = Entry(fra2, width=10)
    x1.pack(side=LEFT)

    l4 = Label(fra3, text="b  ")
    l4.pack(side=LEFT)
    b = Entry(fra3, width=10)
    b.pack(side=LEFT)
    but1 = Button(frame,text="Построить", command=get_entrys)
    but1.pack(side=BOTTOM)
    return fra0
def value(event):
    c.delete("all")
    val = combo.get()
    os(ox, oy, km)
    if val == grafics[0]:
        g()
        graph(-5, 5, 0, 1, ox, oy, km)
    if val == grafics[1]:
        graph1(0.1, 10, 3, ox, oy, km)
    if val == grafics[2]:
        graph2(-5, 15, -1, 0, 0, ox, oy, km)

l0 = Label(frame, text="Выберите график")
l0.pack()
combo = ttk.Combobox(frame, values=grafics,state="readonly")
combo.current(0)
combo.pack()
combo.bind("<<ComboboxSelected>>", value)


root.mainloop()
