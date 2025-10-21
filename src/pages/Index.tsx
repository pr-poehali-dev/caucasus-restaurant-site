import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const menuItems = [
  {
    id: 1,
    category: 'Основные блюда',
    items: [
      {
        name: 'Хачапури по-аджарски',
        description: 'Традиционная грузинская лепешка с сыром и яйцом',
        price: 650,
        image: 'https://cdn.poehali.dev/projects/f87d125f-1c4d-456c-95b9-b4713faaa3e6/files/8bb89f28-9193-4540-b871-ce9262a7d268.jpg',
      },
      {
        name: 'Шашлык из баранины',
        description: 'Сочное мясо, маринованное по традиционному рецепту',
        price: 890,
        image: 'https://cdn.poehali.dev/projects/f87d125f-1c4d-456c-95b9-b4713faaa3e6/files/98477648-c568-42bb-bc40-ed1a4b6f4ef0.jpg',
      },
      {
        name: 'Хинкали',
        description: 'Грузинские пельмени с мясной начинкой',
        price: 120,
        image: 'https://cdn.poehali.dev/projects/f87d125f-1c4d-456c-95b9-b4713faaa3e6/files/8bb89f28-9193-4540-b871-ce9262a7d268.jpg',
      },
    ],
  },
  {
    id: 2,
    category: 'Салаты',
    items: [
      {
        name: 'Салат с баклажанами',
        description: 'Запеченные баклажаны с грецким орехом и гранатом',
        price: 450,
        image: 'https://cdn.poehali.dev/projects/f87d125f-1c4d-456c-95b9-b4713faaa3e6/files/8bb89f28-9193-4540-b871-ce9262a7d268.jpg',
      },
    ],
  },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const { toast } = useToast();

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleReservation = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Бронирование принято!',
      description: 'Мы свяжемся с вами в ближайшее время для подтверждения.',
    });
  };

  const handleDelivery = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заказ принят!',
      description: 'Ваш заказ будет доставлен в течение 60 минут.',
    });
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <h1 className="text-2xl md:text-3xl font-bold text-primary font-serif">Кавказ</h1>
            <div className="hidden md:flex gap-8">
              {['Главная', 'Меню', 'Доставка', 'Бронирование', 'Банкеты', 'О ресторане'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.toLowerCase().replace(' ', '-') ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <Button size="sm" onClick={() => scrollToSection('бронирование')}>
              Забронировать
            </Button>
          </div>
        </div>
      </nav>

      <section
        id="главная"
        className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-background via-muted/20 to-background"
      >
        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-5xl md:text-7xl font-bold text-secondary font-serif leading-tight">
                Вкус настоящего Кавказа
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Аутентичная кухня, семейные рецепты и атмосфера гостеприимства в самом сердце города
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection('меню')} className="text-base">
                  Меню
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('доставка')} className="text-base">
                  Доставка
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/f87d125f-1c4d-456c-95b9-b4713faaa3e6/files/ed33e453-75d7-4a12-a47f-25d593cbc55c.jpg"
                alt="Интерьер ресторана Кавказ"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="меню" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary font-serif mb-4">Наше меню</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Традиционные блюда кавказской кухни, приготовленные по семейным рецептам
            </p>
          </div>

          <Tabs defaultValue="Основные блюда" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="Основные блюда">Основные блюда</TabsTrigger>
              <TabsTrigger value="Салаты">Салаты</TabsTrigger>
            </TabsList>

            {menuItems.map((category) => (
              <TabsContent key={category.id} value={category.category} className="space-y-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, index) => (
                    <Card
                      key={index}
                      className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                    >
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl font-serif">{item.name}</CardTitle>
                        <CardDescription className="text-sm">{item.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">{item.price} ₽</span>
                        <Button size="sm">
                          <Icon name="ShoppingCart" size={16} className="mr-2" />
                          Заказать
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section id="доставка" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary font-serif mb-4">Доставка</h2>
              <p className="text-lg text-muted-foreground">
                Доставляем горячие блюда в течение 60 минут. Минимальная сумма заказа — 1000 ₽
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Оформить заказ</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleDelivery} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="delivery-name">Имя</Label>
                      <Input id="delivery-name" placeholder="Ваше имя" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="delivery-phone">Телефон</Label>
                      <Input id="delivery-phone" type="tel" placeholder="+7 (___) ___-__-__" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="delivery-address">Адрес доставки</Label>
                    <Input id="delivery-address" placeholder="Улица, дом, квартира" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="delivery-order">Состав заказа</Label>
                    <Textarea id="delivery-order" placeholder="Укажите блюда и количество" rows={4} required />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    <Icon name="Bike" size={20} className="mr-2" />
                    Оформить доставку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="бронирование" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary font-serif mb-4">Бронирование столика</h2>
              <p className="text-lg text-muted-foreground">Забронируйте стол в удобное для вас время</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Забронировать стол</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleReservation} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="reservation-name">Имя</Label>
                      <Input id="reservation-name" placeholder="Ваше имя" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="reservation-phone">Телефон</Label>
                      <Input id="reservation-phone" type="tel" placeholder="+7 (___) ___-__-__" required />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="reservation-date">Дата</Label>
                      <Input id="reservation-date" type="date" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="reservation-time">Время</Label>
                      <Input id="reservation-time" type="time" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="reservation-guests">Гостей</Label>
                      <Input id="reservation-guests" type="number" min="1" max="20" placeholder="2" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reservation-comments">Комментарий</Label>
                    <Textarea id="reservation-comments" placeholder="Особые пожелания" rows={3} />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    <Icon name="CalendarCheck" size={20} className="mr-2" />
                    Забронировать
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="банкеты" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary font-serif mb-4">Банкеты и мероприятия</h2>
              <p className="text-lg text-muted-foreground">Организуем праздники любого масштаба</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Users" size={32} className="text-primary" />
                  </div>
                  <CardTitle className="font-serif">Корпоративы</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Организуем корпоративные мероприятия от 10 до 100 человек</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Heart" size={32} className="text-primary" />
                  </div>
                  <CardTitle className="font-serif">Свадьбы</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Сделаем ваш праздник незабываемым с традиционным гостеприимством</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Cake" size={32} className="text-primary" />
                  </div>
                  <CardTitle className="font-serif">Дни рождения</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Проведите день рождения в уютной атмосфере нашего ресторана</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Заказать банкет</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleReservation} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="banquet-name">Имя</Label>
                      <Input id="banquet-name" placeholder="Ваше имя" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="banquet-phone">Телефон</Label>
                      <Input id="banquet-phone" type="tel" placeholder="+7 (___) ___-__-__" required />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="banquet-date">Дата мероприятия</Label>
                      <Input id="banquet-date" type="date" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="banquet-guests">Количество гостей</Label>
                      <Input id="banquet-guests" type="number" min="10" placeholder="50" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="banquet-details">Детали мероприятия</Label>
                    <Textarea id="banquet-details" placeholder="Тип мероприятия, пожелания по меню и оформлению" rows={4} required />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="о-ресторане" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary font-serif mb-4">О ресторане</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground">
                  Ресторан «Кавказ» — это место, где традиции встречаются с современностью. Мы готовим по семейным
                  рецептам, передающимся из поколения в поколение.
                </p>
                <p className="text-lg text-muted-foreground">
                  Наши повара используют только свежие продукты и традиционные специи, чтобы каждое блюдо раскрывало
                  настоящий вкус кавказской кухни.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 font-serif">Часы работы</h3>
                    <p className="text-muted-foreground">Ежедневно с 11:00 до 23:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 font-serif">Адрес</h3>
                    <p className="text-muted-foreground">г. Москва, ул. Примерная, 123</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 font-serif">Телефон</h3>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold font-serif mb-4">Кавказ</h3>
              <p className="text-sm opacity-90">Аутентичная кавказская кухня в самом сердце города</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm opacity-90">
                <p>г. Москва, ул. Примерная, 123</p>
                <p>+7 (495) 123-45-67</p>
                <p>info@kavkaz-restaurant.ru</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Часы работы</h4>
              <div className="space-y-2 text-sm opacity-90">
                <p>Понедельник - Воскресенье</p>
                <p>11:00 - 23:00</p>
              </div>
            </div>
          </div>
          <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm opacity-75">
            <p>&copy; 2024 Ресторан Кавказ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
