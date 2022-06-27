import { CheckCircle, Lock } from 'phosphor-react';
import { format, isPast } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

interface LessonProps {
  slug: string;
  title: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export default function Lesson(props: LessonProps) {
  const { slug } = useParams<{ slug: string }>();

  const isLessonAvailable = isPast(props.availableAt);

  const availableDateFormatted = format(
    props.availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    { locale: ptBR }
  );

  const isActiveLesson = slug === props.slug;

  return (
    <Link
      to={isLessonAvailable ? `/lesson/${props.slug}` : '#'} 
      className={classNames({
        'group': isLessonAvailable,
        'cursor-not-allowed': !isLessonAvailable
      })}
    >
      <span className="text-gray-300">
        {availableDateFormatted}
      </span>

      <div className={classNames(
        'rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-colors', {
          'bg-green-500 border-green-500': isActiveLesson
        }
      )}>
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className={classNames(
              'text-sm font-medium flex align-center gap-2', {
                'text-green-300': !isActiveLesson,
                'text-white': isActiveLesson
              }
            )}>
              <CheckCircle size={20} />
              Conteúdo disponível
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex align-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span className={classNames(
            'text-xs rounded py-[0.125rem] px-2 border border-green-300 font-bold', {
              'text-green-300': !isActiveLesson && isLessonAvailable,
              'text-white border-white': isActiveLesson,
              'text-orange-500 border-orange-500': !isLessonAvailable,
            }
          )}>
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong className={classNames(
          'text-gray-200 mt-5 block', {
            'text-white': isActiveLesson
          }
        )}>
          {props.title}
        </strong>
      </div>
    </Link>
  );
};
